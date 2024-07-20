import React from "react";

const LineChartTooltip = ({ active, payload, label, originalData }: any) => {
    if (active && payload && payload.length) {
        const item = originalData.find((data: any) => data.date === label);
        if (item) {
            return (
                <div className="custom-tooltip dark:border-primary-100 border-black border p-3 rounded-md dark:text-primary-100">
                    {/* <p className="label">{`Date: ${item.date}`}</p> */}
                    <p className="desc">{`Price: $${item.price.toLocaleString()}`}</p>
                </div>
            );
        }
    }

    return null;
};

export default LineChartTooltip;
