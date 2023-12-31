// Массив с вопросами. Не Зашифрован :)

let themeName = "Зарезка новых стволов";

let allQuestions = [
	{
        type: 0,    // Тип вопроса
        price: 100, // Цена вопроса
        text: 'Скважиной  называется:',  // Текст вопроса
        image: false, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: ['сооружение в земной коре диаметр, которого увеличивается с глубиной', 'горное сооружение преимущественно круглого сечения диаметром до 2 метров', 'горная цилиндрическая выработка в земной коре малого диаметра по сравнению с её протяженностью', 'сооружение в земной коре диаметр, которого увеличивается с глубиной'],  // Варианты ответов
        correctAnswer: [2], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 0,    // Тип вопроса
        price: 100, // Цена вопроса
        text: 'Элементами скважины являются:',  // Текст вопроса
        image: false, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: ['нагрузка на крюке, высота пола основания', 'диаметр долота, направление в пространстве, назначение', 'зенитный угол, азимутальный угол, угол наклона', 'устье, забой, ствол скважины', 'диаметр, глубина, длина'],  // Варианты ответов
        correctAnswer: [3], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 0,    // Тип вопроса
        price: 100, // Цена вопроса
        text: 'Количество подаваемого на забой бурового раствора устанавливается, исходя из следующих условий:',  // Текст вопроса
        image: false, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: ['обеспечение скорости в затрубном пространстве, достаточной для эффективного выноса выбуренной породы', 'предупреждение возникновения аварий', 'обеспечение бесперебойной работы всех забойных механизмов', 'регулирование структурно-механических свойств буровых растворов'],  // Варианты ответов
        correctAnswer: [0], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 0,    // Тип вопроса
        price: 100, // Цена вопроса
        text: 'В классификацию буровых растворов входят:',  // Текст вопроса
        image: false, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: ['буровые растворы на водной основе, на неводной основе, аэрированные жидкости и пены', 'буровые растворы на неводной основе, аэрированные жидкости и пены', 'буровые растворы на водной основе, на неводной основе, коллоидные растворы, суспензии', 'буровые растворы на водной основе, на неводной основе, газообразные рабочие агенты, аэрированные жидкости и пены'],  // Варианты ответов
        correctAnswer: [3], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 0,    // Тип вопроса
        price: 100, // Цена вопроса
        text: 'Основными исполнительными механизмами буровой установки являются:',  // Текст вопроса
        image: false, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: ['силовой привод, ротор', 'компрессор, насос, ротор', 'лебедка, ротор, насос', 'вертлюг, насос'],  // Варианты ответов
        correctAnswer: [2], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 0,    // Тип вопроса
        price: 100, // Цена вопроса
        text: 'При талевой оснастке 4*5 количество рабочих струн равно:',  // Текст вопроса
        image: false, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: ['4', '8', '5', '12'],  // Варианты ответов
        correctAnswer: [1], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 2, // Тип вопроса
        price: 200, // Цена вопроса
        text: 'Вставьте пропущенное слово.', // Текст вопроса
        // Текст тела вопроса. В местах где "|" будет вставлен dropdown с выбором.
        textDd: "При проведении спуско-подъемных операций в качестве инструмента, фиксирующего ведущую трубу, можно использовать |",
        answers: [
                ["крюк","штроп","клин","ключ"],
                ],
        correctAnswer: [2], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 2, // Тип вопроса
        price: 200, // Цена вопроса
        text: 'Вставьте пропущенное слово.', // Текст вопроса
        // Текст тела вопроса. В местах где "|" будет вставлен dropdown с выбором.
        textDd: "| служит для крепления верхних неустойчивых интервалов разреза, изоляции водоносных горизонтов от загрязнения, размещения ПВО",
        answers: [
                ["Кондуктор","Направление","Эксплуатационная колонна"],
                ],
        correctAnswer: [0], // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 5, // Тип вопроса
        price: 250, // Цена вопроса
        text: 'Установите соответствие между названием и определением конструкции скважины.',    // Текст вопроса
        image: true, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: ["Направление","Башмак","Промежуточная колонна","Эксплуатационная колонна","Кондуктор"],// Варианты ответов.
        correctAnswer: [3,2,0,1,4],   // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 5, // Тип вопроса
        price: 350, // Цена вопроса
        text: 'Установите соответствие между основными узлами схемы циркуляции бурового раствора и их цифровым обозначением:',    // Текст вопроса
        image: true, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: ["Устье скважины","Вертлюг","Труба ведущая","Колонна бурильная","Насос буровой"],
        correctAnswer: [4,1,2,0,3],     // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
    {
        type: 5, // Тип вопроса
        price: 350, // Цена вопроса
        text: 'Установите соответствие между основными узлами схемы циркуляции бурового раствора и их цифровым обозначением:',    // Текст вопроса
        image: true, // Имеется ли у него картинка/картинки? Может содержать true.
        answers: ["Блок очистки","Амбар","Насос подпорный","Резервуар",],
        correctAnswer: [0,3,2,1],     // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },
];

