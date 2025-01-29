document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let voterName = document.getElementById('voter').value;
    let candidateName = document.getElementById('candidate').value;

    // Placeholder logic to simulate vote submission
    let result = `Vote from ${voterName} for ${candidateName} has been cast.`;
    document.getElementById('result').innerHTML = result;

    // Clear form fields
    document.getElementById('voter').value = '';
    document.getElementById('candidate').value = 'Candidate 1';
});
