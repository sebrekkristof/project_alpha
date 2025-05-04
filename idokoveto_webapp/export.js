function exportCSV() {
    const data = ['Feladat,Idő (perc)', 'Munka,25', 'Tanulás,40'];
    const blob = new Blob([data.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'idokovetes.csv';
    a.click();
    URL.revokeObjectURL(url);
}
