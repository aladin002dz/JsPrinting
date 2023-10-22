main();
function main() {
    document.getElementById('myForm').addEventListener('submit', printFormInputs);
    function printFormInputs(e) {
        e.preventDefault();
        console.log('Form submitted!');

        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');

        var printableContent = '<h2>Form Input Values</h2>';
        printableContent += '<p>Name: ' + nameInput.value + '</p>';
        printableContent += '<p>Email: ' + emailInput.value + '</p>';

        var printWindow = window.open('', '', 'width=800,height=600');
        printWindow.document.write('<html><head><title>Printable Content</title></head><body>');
        printWindow.document.write(printableContent);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        //printWindow.close();
    }
}
