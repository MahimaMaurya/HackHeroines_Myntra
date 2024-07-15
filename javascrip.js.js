// scripts.js


document.addEventListener("DOMContentLoaded", function() {
    const salesTrendCtx = document.getElementById('salesTrendChart').getContext('2d');
    const categoryPopularityCtx = document.getElementById('categoryPopularityChart').getContext('2d');
    const geographicDistributionCtx = document.getElementById('geographicDistributionChart').getContext('2d');
    const seasonalTrendsCtx = document.getElementById('seasonalTrendsChart').getContext('2d');

    const salesTrendChart = new Chart(salesTrendCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Trending',
                data: [150, 200, 180, 220, 170, 240],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });


            // Create the line chart
            

    const categoryPopularityChart = new Chart(categoryPopularityCtx, {
        type: 'bar',
        data: {
            labels: ['Casual', 'Formal', 'Sportswear', 'Ethnic', 'Partywear'],
            datasets: [{
                label: 'Category Popularity',
                data: [120, 150, 90, 130, 70],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    const geographicDistributionChart = new Chart(geographicDistributionCtx, {
        type: 'pie',
        data: {
            labels: ['Baggy Pants', 'Oversized shirts', 'Sneakers', 'Dresses', 'Skinny Jeans'],
            datasets: [{
                label: 'Geographic Distribution',
                data: [40, 30, 20, 5, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    const seasonalTrendsChart = new Chart(seasonalTrendsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Spring', 'Summer', 'Autumn', 'Winter'],
            datasets: [{
                label: 'Seasonal Trends',
                data: [25, 35, 20, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });


// scripts.js

// Sample data for the bar chart
const categories = ['Leather', 'Sheer', 'Cotton', 'Lace', 'Tulle', 'Satin', 'Mesh', 'Knitted', 'Denim', 'Tweed', 'Chiffon Fabrics', 'Linen', 'Silk', 'Mohair', 'chain', 'Meat', 'Lightweight', 'Organza', 'Nylon', 'Transparent','Jacquard'];
const values = [60, 35, 3, 14, 8, 15, 20, 1, 3, 5, 12, 5, 20, 4, 4, 19, 4, 3, 5, 3,1];

// Get the canvas element
const canvas = document.getElementById('barChart');
const ctx = canvas.getContext('2d');

// Bar chart configuration
const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: categories,
        datasets: [{
            label: 'Fabric trends in Spring/Summer 2024 Fashion Weeks',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue bars with opacity
            borderColor: 'rgba(54, 162, 235, 1)', // Border color for bars
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Start y-axis at 0
            }
        }
    }
});
});
            
