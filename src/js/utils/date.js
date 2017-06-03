export const formatter = new Intl.DateTimeFormat(undefined, {
    timeZoneName: 'short',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric'
});

export const now = () => new Date()

export default {
    formatter: formatter,
    now: now
};
