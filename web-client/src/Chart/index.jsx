import React from 'react'
import Chart from 'react-apexcharts'

const ApexChart = ({data}) => {

    return (
        <Chart
            type="area"
            height={300}
            width='100%'
            series={[
                {
                    name: "Commits",
                    //  Here is where we are passing the data fetched from our JSON API
                    data: data?.map(data => data.bid)
                }
            ]}

            options={{
                chart: {
                    toolbar: {
                        show: false
                    },

                },
                colors: ['#f90000'],
                stroke: { width: 1, curve: 'smooth' },
                dataLabels: { enabled: false },
                xaxis: {

                    categories: data?.map(data => data.time), // Here is where we are passing the data fetched from our JSON API

                },
                yaxis: {
                    show: false,
                }
            }}
        />
    )
}

export default ApexChart