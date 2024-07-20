import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from "query-string"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function timeConverter(UNIX_timestamp: number) {
  const a = new Date(UNIX_timestamp);
  // const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = a.getFullYear();
  // const month = months[a.getMonth()];
  const month = a.getMonth();
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}


export function formUrlQuery(searchParams: string, key: string, value: string) {
  const search_params = qs.parse(searchParams)
  search_params[key] = value

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: search_params
  }, {
    skipNull: true
  })

}