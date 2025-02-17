import { ResponsiveChoropleth } from '@nivo/geo'
import { useTheme } from '@mui/material'
import { tokens } from '../theme'
import { mockGeographyData as data } from '../data/mockData'
import { geoFeatures } from '../data/mockGeoFeatures'
import React from 'react'




const GeoChart = ({ isDashboard = false }) => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)


    return (
        <ResponsiveChoropleth
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100]
                        }
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100],
                            fontSize: '14px'
                        }
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1
                        },
                        text: {
                            fill: colors.grey[100],
                            fontSize: '12px'
                        }
                    },
                },
                legends: {
                    text: {
                        fill: colors.grey[100],
                        fontSize: '14px'
                    }
                },
                tooltip: {
                    container: {
                        color: colors.primary[500]
                    }
                }
            }}
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 10 }}
            colors="nivo"
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionType="mercator"
            projectionScale={isDashboard ? 40 : 140}
            projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={0.7}
            borderColor="#000"
            onClick={() => { }}
            layers={['graticule', 'features']}

            isInteractive={true}
            onMouseEnter={() => { }}
            onMouseLeave={() => { }}
            onMouseMove={() => { }}
            value='value'
            match='id'
            role='img'

            enableGraticule={false}
            graticuleLineWidth={0.5}
            graticuleLineColor='#999999'

            fillColor='#dddddd'

            fill={
                [
                    {
                        match: {
                            id: 'CAN'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'CHN'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'ATA'
                        },
                        id: 'gradient'
                    }
                ]}
            legends={
                !isDashboard
                    ? [
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: 'left-to-right',
                            itemTextColor: colors.grey[100],
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000000',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ] : undefined
            }

        />

    )

}

export default GeoChart;