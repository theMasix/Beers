import _ from 'lodash';
// آرایه ایی از آیتم ها را میگیرد و با توجه به شماره صفحه و اندازه صفحه  آیتم هایی را برمیگرداند
export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
   return _(items)
   .slice(startIndex)
   .take(pageSize)
   .value();

}