export const catchAsyncErrors = (theFuntion) => {
    return (req, res, next) => {
        Promise.resolve(theFunction(req, res, next)).catch(next);
    };
}