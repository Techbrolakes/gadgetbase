const logger = <T>(log: T): void => {
    if (process.env.NODE_ENV === 'development') {
        console.log(log);
    }
};

export default logger;
