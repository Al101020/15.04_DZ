export function sorting(target) {
  const table = target.children[1].children[1]    // console.log(table); // куда вставляем
  
  const arrChildTable = Array.from(table.children);
  const arr = arrChildTable
  .sort((a, b) => new Date(a.children[0].textContent) - new Date(b.children[0].textContent));

  return arr;
  // console.log(arr); // прикрыл пока, но результат есть - сортирует
}