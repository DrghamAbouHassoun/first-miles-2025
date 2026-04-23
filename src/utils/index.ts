
export const isValidNumber = (value: any) => {
    return typeof value === 'number' && Number.isFinite(value);
}

const formatter = new Intl.NumberFormat('en-US');

export const formatNumber = (value: number) => {
    return formatter.format(value);
}