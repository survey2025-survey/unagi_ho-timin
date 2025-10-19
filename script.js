$(document).ready(function () {
  $(".logo span").each(function (index) {
    const rotationAngle = (index - 4) * 25;
    $(this).css({
      transform: "rotate(" + rotationAngle + "deg)",
      transition: "transform 0.5s ease",
    });
  });
});






function cancelSurvey() {
  document.getElementById('question1').classList.remove('hidden');
  document.getElementById('question2').classList.add('hidden');
  document.getElementById('thankYou').classList.add('hidden');
}

function selectOption(option) {
  console.log("Selected Experience:", option);
  document.getElementById("experience-select").value = option;

  // 選択後に自動的に送信
  submitForm();
}

function submitForm() {
  // フォームの送信ボタンをクリック
  document.getElementById("submitButton").click();
}

function initializeCustomSelect() {
  const selectItems = document.querySelectorAll('.select-item');

  selectItems.forEach(item => {
    item.addEventListener('click', function () {
      const value = this.getAttribute('data-value');

      // Remove 'selected' class from all items
      selectItems.forEach(i => i.classList.remove('selected'));

      // Add 'selected' class to the clicked item
      this.classList.add('selected');

      // Call selectOption function
      selectOption(value);
    });
  });
}

// DOM読み込み完了時に初期化関数を実行
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeCustomSelect);
} else {
  initializeCustomSelect();
}

function rset(form) {
  // フォームリセットの処理（必要に応じて実装）
  console.log("Form reset");
}

function restartSurvey() {
  cancelSurvey();
}

