import React from "react";

const CustomTooltip = ({
    active,
    payload,
    label,
    originalData,
    value,
}: any) => {
    if (active && payload && payload.length) {
        const item = originalData.find((data: any) => data.name === label);
        return (
            <div className="custom-tooltip dark:border-primary-100 border-black border p-3 rounded-md dark:text-primary-100">
                <p className="uppercase">{`${label}`}</p>
                <p className="desc">{`${value}: $${item.market_cap.toLocaleString()}`}</p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;
