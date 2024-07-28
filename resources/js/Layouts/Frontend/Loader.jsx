import React from "react";

const Loader = () => {
    return (
        <React.Fragment>
            {/* start cssload-loader */}
            <div className="preloader">
                <div className="loader">
                    <svg className="spinner" viewBox="0 0 50 50">
                        <circle
                            className="path"
                            cx={25}
                            cy={25}
                            r={20}
                            strokeWidth={5}
                            fill="none"
                        />
                    </svg>
                </div>
            </div>
            {/* end cssload-loader */}
        </React.Fragment>
    );
};

export default Loader;
