export const formatter = new Intl.DateTimeFormat(undefined, {
    timeZoneName: 'short',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric'
});

export const now = () => new Date()

export const HOUR = 60 * 60 * 1000 //ms

export function is_hour_passed(date) {
    return now() - date > HOUR;
}

export default {
    formatter,
    is_hour_passed,
    now,
    HOUR
};
