const XLSX = require('xlsx');
const dayjs = require('dayjs');

const genExcel = (table: string[][]) => {
  const ws = XLSX.utils.aoa_to_sheet(table);

  /* build up workbook */
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'SheetJS');

  /* generate download */
  XLSX.writeFile(wb, `review-${dayjs().format('YYYY-MM-DD')}.xlsx`);
  console.log('excel generate success');
};

export default genExcel;
