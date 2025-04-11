// Sales Chart
const salesChart = document.getElementById('salesChart').getContext('2d');
new Chart(salesChart, {
    type: 'line',
    data: {
        labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm'],
        datasets: [{
            label: 'Sales',
            data: [60, 35, 55, 35, 20, 45],
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            tension: 0.4,
            fill: true,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#6366f1',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                    drawBorder: false
                },
                ticks: {
                    stepSize: 20
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        elements: {
            line: {
                borderWidth: 2
            }
        }
    }
});

// Analytics Chart 
const analyticsChart = document.getElementById('analyticsChart').getContext('2d');
new Chart(analyticsChart, {
    type: 'doughnut',
    data: {
        labels: ['Sale', 'Distribute', 'Return'],
        datasets: [{
            data: [80, 12, 8],
            backgroundColor: ['#4F46E5', '#FFA500', '#FF4444'],
            borderWidth: 0,
            borderRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#fff',
                    padding: 15,
                    font: {
                        size: 12
                    }
                }
            }
        }
    }
});

// center text for Analytics
const analyticsContainer = document.querySelector('.analytics-chart');
const percentageDiv = document.createElement('div');
percentageDiv.className = 'analytics-percentage';
percentageDiv.innerHTML = `
    <h3>80%</h3>
    <p>Transactions</p>
`;
analyticsContainer.appendChild(percentageDiv); 