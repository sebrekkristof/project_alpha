// This file initializes Chart.js and renders charts using sample data from the JSON file.

fetch('data/sample-data.json')
    .then(response => response.json())
    .then(data => {
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar', // Change this to 'line', 'pie', etc. for different chart types
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Sample Data',
                    data: data.values,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error loading the data:', error));