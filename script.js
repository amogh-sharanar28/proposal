const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const optionButtons = document.querySelectorAll('.option-btn');

optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const nextTabId = button.dataset.next;
        const currentTab = button.closest('.tab-content');
        const reactionContainer = currentTab.querySelector('.reaction-animation');

        if (button.classList.contains('final-yes')) {
            // Special animation for final question
            currentTab.classList.add('special-animation');
        } else {
            // Show reaction animation
            const reactionType = button.dataset.reaction;
            reactionContainer.textContent = reactionType === 'joyful' ? '😊' : '😢';
            reactionContainer.className = `reaction-animation ${reactionType}`;
        }

        // Delay switching to the next tab for effect
        setTimeout(() => {
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(nextTabId).classList.add('active');

            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector(`[data-tab="${nextTabId}"]`).classList.add('active');
        }, 1500);
    });
});
