import React from "react"

type SnackBarProps = {
    type: string,
    message: string
}

const SnackBar = React.forwardRef(({ }, ref): any => {
    const [displaySnackBar, setDisplaySnackBar] = React.useState(false)
    const [snackBarProps, setSnackBarProps] = React.useState<SnackBarProps | any>({})

    const fireSnackBar = (snackBarProps: SnackBarProps) => {
        setSnackBarProps(snackBarProps)
        setDisplaySnackBar(true)
        const timer = setTimeout(() => {
            setDisplaySnackBar(false)
        }, 2500);
        return () => clearTimeout(timer);
    }

    React.useImperativeHandle(ref, () => ({
        fireSnackBar: fireSnackBar
    }), [])

    return (
        displaySnackBar && <div className={`snackbar-root ${snackBarProps.type === "success" ? "snackbar-success" : "snackbar-fail"}`}>
            <span className={`${snackBarProps.type === "success" ? "snackbar-success" : "snackbar-fail"}`}>{snackBarProps.message}</span>

            <style jsx>{`
                .snackbar-root {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 300px;
                    height: 50px;
                    display: flex;
                    border-radius: 4px;
                }

                .snackbar-success {
                    background-color: #4caf50;
                    margin:auto;
                }

                .snackbar-fail {
                    background-color: #f44336;
                    margin:auto;
                }

                @media only screen and (max-width: 1024px){
                    .snackbar-root {
                        left: 3%;
                    }
                }
            `}

            </style>
        </div>
    )
});

export default SnackBar;