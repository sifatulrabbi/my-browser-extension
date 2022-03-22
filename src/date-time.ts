import { DAYS, MONTHS } from "./constants";

class TimeTicker {
    private date!: string;
    private time!: string;
    private subscribers: ((time: string, date: string) => void)[] = [];

    constructor() {
        this.update();
    }

    subscribe(callback: (time: string, date: string) => void) {
        this.subscribers.push(callback);
    }

    update() {
        const date = new Date();
        this.setDate(date);
        this.setTime(date);
        this.subscribers.forEach((listener) => {
            listener(this.time, this.date);
        });
    }

    private setTime(date: Date) {
        let hours: string, minutes: string;

        if (date.getHours() === 0) {
            hours = "12";
        } else if (date.getHours() < 10) {
            hours = "0" + date.getHours().toString();
        } else if (date.getHours() > 12) {
            hours = (date.getHours() - 12).toString();
        } else {
            hours = date.getHours().toString();
        }

        if (date.getMinutes() < 10) {
            minutes = "0" + date.getMinutes().toString();
        } else {
            minutes = date.getMinutes().toString();
        }

        this.time = hours + ":" + minutes;
    }

    private setDate(date: Date) {
        let day: string, month: string, year: string, d: string;

        day = DAYS[date.getDay()];
        month = MONTHS[date.getMonth()];
        year = date.getFullYear().toString();
        d = date.getDate().toString();

        this.date = `${day} ${month} ${d}, ${year}`;
    }
}

const timeTicker = new TimeTicker();

// updating time...
(function tick() {
    timeTicker.update();
    window.requestAnimationFrame(tick);
})();

export function showDateAndTime(
    dateContainer: HTMLSpanElement,
    timeContainer: HTMLSpanElement
) {
    timeTicker.subscribe((time, date) => {
        dateContainer.innerText = date;
        timeContainer.innerText = time;
    });
}
