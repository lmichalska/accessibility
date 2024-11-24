export default function combineClasses(
  ...classes: (string | undefined)[]
): string {
  return classes.filter(Boolean).join(' ');
}
