document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            const url = member.getAttribute('data-url');
            if (url) {
                // Open the link in a new tab
                window.open(url, '_blank');
            }
        });
    });
});
