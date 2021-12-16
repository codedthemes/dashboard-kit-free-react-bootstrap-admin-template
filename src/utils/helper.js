// Helper functions

export const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i += 1) {
        arr.push(i);
    }
    return arr;
};

export const requireAll = (requireContext) => requireContext.keys().map(requireContext);

export const randomDate = (start, end, format) => {
    const today = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    let formattedDate = '';

    if (format === 'dd/mm/yyyy') {
        formattedDate = `${dd < 10 ? `0${dd}` : dd}/${mm < 10 ? `0${mm}` : mm}/${yyyy}`;
    } else if (format === 'yyyy-mm-dd') {
        formattedDate = `${yyyy}-${mm < 10 ? `0${mm}` : mm}-${dd < 10 ? `0${dd}` : dd}`;
    }

    return formattedDate;
};
