let serial = 0;
//-----------card number One ----------
document.getElementById('calculate_btn_one').addEventListener('click', function () {
  serial = serial + 1;
  // ---------------get dataDetailsById -----------------
  const cd = getDataDetails("triangle_name", "input_b", "input_h");
  const calculate = 0.5 * parseInt(cd.cardInputB) * parseInt(cd.cardInputH);

  if (isNaN(calculate)) {
    alert('please type a number in input field');
    return;
  }

  if (isNaN(cd.cardInputB) && isNaN(cd.cardInputH)) {
    alert('please provid a valid number');
    return;
  }

  if (
    cd.cardInputB == "" ||
    cd.cardInputH == "" ||
    cd.cardInputB < 0 ||
    cd.cardInputH < 0
  ) {
    alert("please enter any valid number");
    return;
  }
  //----------Show displayData----------------
  displayData(serial, cd.cardName, calculate);
})
//------------card number tow--------
document.getElementById('calculate_btn_tow').addEventListener('click', function () {
  serial = serial + 1;
  // ---------------get dataDetailsById -----------------
  const cd = getDataDetails("rectangle_name", "input_w", "input_l");
  const calculate = parseInt(cd.cardInputB) * parseInt(cd.cardInputH);

  if (isNaN(calculate)) {
    alert('please type a number in input field');
    return;
  }

  if (isNaN(cd.cardInputB) && isNaN(cd.cardInputH)) {
    alert('please provid a valid number');
    return;
  }

  if (
    cd.cardInputB == "" ||
    cd.cardInputH == "" ||
    cd.cardInputB < 0 ||
    cd.cardInputH < 0
  ) {
    alert("please enter any valid number");
    return;
  }
  //----------Show displayData----------------
  displayData(serial, cd.cardName, calculate);
})
//------------card number three---------
document.getElementById('calculate_btn_three').addEventListener('click', function () {
  serial = serial + 1;
  // ---------------get dataDetailsById -----------------
  const cd = getDataDetails("Parallelogram_name", "input_x", "input_y");
  const calculate = parseInt(cd.cardInputB) * parseInt(cd.cardInputH);

  if (isNaN(calculate)) {
    alert('please type a number in input field');
    return;
  }
  if (isNaN(cd.cardInputB) && isNaN(cd.cardInputH)) {
    alert('please provid a valid number');
    return;
  }

  if (
    cd.cardInputB == "" ||
    cd.cardInputH == "" ||
    cd.cardInputB < 0 ||
    cd.cardInputH < 0
  ) {
    alert("please enter any valid number");
    return;
  }
  //----------Show displayData----------------
  displayData(serial, cd.cardName, calculate);
})
// -----------card number four----------
document.getElementById('calculate_btn_four').addEventListener('click', function () {
  serial = serial + 1;
  // ---------------get dataDetailsById -----------------
  const cd = getDataDetails("rhombus_name", "input_d1", "input_d2");
  const calculate = 0.5 * parseInt(cd.cardInputB) * parseInt(cd.cardInputH);

  if (isNaN(calculate)) {
    alert('please type a number in input field');
    return;
  }

  if (isNaN(cd.cardInputB) && isNaN(cd.cardInputH)) {
    alert('please provid a valid number');
    return;
  }

  if (
    cd.cardInputB == "" ||
    cd.cardInputH == "" ||
    cd.cardInputB < 0 ||
    cd.cardInputH < 0
  ) {
    alert("please enter any valid number");
    return;
  }
  //----------Show displayData----------------
  displayData(serial, cd.cardName, calculate);
})
//----------------card number five-----------
document.getElementById('calculate_btn_five').addEventListener('click', function () {
  serial = serial + 1;

  // ---------------get dataDetailsById -----------------
  const cd = getDataDetails("pentagon_name", "input_p", "input_k");
  const calculate = 0.5 * parseInt(cd.cardInputB) * parseInt(cd.cardInputH);

  if (isNaN(calculate)) {
    alert('please type a number in input field');
    return;
  }

  if (isNaN(cd.cardInputB) && isNaN(cd.cardInputH)) {
    alert('please provid a valid number');
    return;
  };

  if (
    cd.cardInputB == "" ||
    cd.cardInputH == "" ||
    cd.cardInputB < 0 ||
    cd.cardInputH < 0
  ) {
    alert("please enter any valid number");
    return;
  }
  //---------show data in display-------------------
  displayData(serial, cd.cardName, calculate);
})
// ------------card number Six-----------------
document.getElementById('calculate_btn_six').addEventListener('click', function () {
  serial = serial + 1;
  //--------------get DataDetaileById---------
  const cd = getDataDetails("ellipse_name", "input_a1", "input_b1");

  const calculate = (3.14 * parseInt(cd.cardInputB) * parseInt(cd.cardInputH)).toFixed(2);

  if (isNaN(calculate)) {
    alert('please type a number in input field');
    return;
  };

  if (isNaN(cd.cardInputB) && isNaN(cd.cardInputH)) {
    alert('please provid a valid number');
    return;
  };

  if (
    cd.cardInputB == "" ||
    cd.cardInputH == "" ||
    cd.cardInputB < 0 ||
    cd.cardInputH < 0
  ) {
    alert("please enter any valid number");
    return;
  }
  //---------shaow Data on display
  displayData(serial, cd.cardName, calculate);
})



