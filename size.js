function calculateSize() {
  const chest = document.getElementById("chest").value;
  const height = document.getElementById("height").value;
  const result = document.getElementById("result");

  if (!chest || !height) {
    result.textContent = "กรุณากรอกข้อมูลให้ครบ";
    return;
  }

  let size = "";

  if (chest < 92) size = "S";
  else if (chest < 98) size = "M";
  else if (chest < 104) size = "L";
  else size = "XL";

  result.textContent = "ไซส์ที่แนะนำ: " + size;
}
