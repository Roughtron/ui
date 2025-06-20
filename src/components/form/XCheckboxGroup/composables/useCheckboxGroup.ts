export default () => {
  const formatter = (fields: string[], dictionary: Record<string, string>, hasIcon: boolean) => fields.map(item => ({
    label: dictionary[item],
    icon: hasIcon ? item : undefined,
    value: item,
  }));

  return { formatter };
};
