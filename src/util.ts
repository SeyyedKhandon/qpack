export interface GeneralObject {
  [index: string]: string | number | boolean;
}
export const extractAsKeyValue = (object: GeneralObject) => ({
  key: Object.keys(object)[0],
  value: Object.values(object)[0],
});
