
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('timeChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'],
                datasets: [{
                    label: 'Eltöltött idő (perc)',
                    data: [25, 40, 35, 50, 20],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)'
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
