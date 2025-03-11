function checkAnswers() {
    // Đáp án đúng cho từng câu hỏi
    const correctAnswers = {
        q1: 'b',  // Where is Jane? (Correct: B)
        q2: 'a',  // What is she doing? (Correct: A)
        q3: 'c',  // Where is the car? (Correct: C)
        q4: 'd',  // Where is the dog? (Correct: D)
        q5: 'b',  // What is the dog doing? (Correct: B)
        q6: 'c',  // How does the husband ask where his wife is? (Correct: C)
        q7: 'a',  // How does the wife respond when her husband asks what she is doing? (Correct: A)
        q8: 'b',  // Where are Bill and Mary? (Correct: B)
        q9: 'a',  // What are Bill and Mary doing? (Correct: A)
        q10: 'c', // Where is the cat? (Correct: C)
        q11: 'b', // What is the cat doing? (Correct: B)
        q12: 'b', // Where is the school? (Correct: B)
        q13: 'c', // Where is the post office? (Correct: C)
        q14: 'b', // Where is the Royal Bank? (Correct: B)
        q15: 'a', // Where is the gas station? (Correct: A)
        q16: 'b', // Where is the barbershop? (Correct: B)
        q17: 'a', // How do you ask for directions to the nearest bank? (Correct: A)
        q18: 'b', // How does Ann respond when Scott asks for directions? (Correct: B)
        q19: 'c', // What color is the umbrella that Sera is looking for? (Correct: C)
        q20: 'b', // What color umbrella does the shopkeeper offer? (Correct: B)
        q21: 'c', // Why does Sera refuse the offered umbrella? (Correct: C)
        q22: 'a'  // What does the shopkeeper say about yellow umbrellas? (Correct: A)
    };

    const resultDiv = document.getElementById('result');
    let resultHTML = '';
    let correctCount = 0;
    let unansweredCount = 0;

    // Kiểm tra từng câu hỏi
    for (let i = 1; i <= 22; i++) {
        const questionName = `q${i}`;
        const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
        const correctAnswer = correctAnswers[questionName];

        if (!selectedAnswer) {
            resultHTML += `<p style="color: orange;">Câu ${i}: Vui lòng chọn một đáp án!</p>`;
            unansweredCount++;
        } else {
            if (selectedAnswer.value === correctAnswer) {
                resultHTML += `<p style="color: green;">Câu ${i}: Chúc mừng! Đáp án đúng!</p>`;
                correctCount++;
            } else {
                resultHTML += `<p style="color: red;">Câu ${i}: Sai rồi! Đáp án đúng là: ${correctAnswer.toUpperCase()}</p>`;
            }
        }
    }

    // Thêm tổng kết
    resultHTML = `<h3>Kết quả kiểm tra</h3>` + resultHTML;
    resultHTML += `<p><strong>Tổng kết: Bạn trả lời đúng ${correctCount}/22 câu hỏi.</strong></p>`;
    if (unansweredCount > 0) {
        resultHTML += `<p style="color: orange;">Bạn chưa trả lời ${unansweredCount} câu hỏi. Hãy chọn đáp án cho tất cả câu hỏi để có kết quả chính xác nhất!</p>`;
    }

    // Thêm nút "Làm lại"
    resultHTML += `<button onclick="resetQuiz()">Làm lại</button>`;
    resultDiv.innerHTML = resultHTML;

    // Cuộn xuống phần kết quả
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Hàm reset bài kiểm tra
function resetQuiz() {
    // Xóa lựa chọn của người dùng
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => input.checked = false);

    // Xóa kết quả
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    // Cuộn lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
}