import java.util.Scanner;
import java.util.Random;

public class HomeWork3 {
    /**
     * Урок 2.Массивы
     */
    //1
    public static void changeArray() {
    private static int arr1[] = {0, 0, 1, 1, 1, 0, 1, 0 };
        for(int i = 0; i < arr1.length; i++)
        {
            if (arr1[i] == 0) {
                arr1[i] = 1;
            } else
                if (arr1[i] == 1) {
                arr1[i] = 0;
            }
        }
    }
    //2
    public static void changeArray() {
        private  static int arr2[] = new int[8];
        for(int i = 0; i < arr1.length; i++)
        {
            if (arr1[i] == 0) {
                arr1[i] = 1;
            } else if (arr1[i] == 1) {
                arr1[i] = 0;
            }
        }
    }
    //3
    public static void setIntArray2() {
        private static int arr3[] = {1, 5, 3, 2, 11, 4, 5, 2, 4, 8, 9, 1};
        for (int i = 0; i < arr3.length; i ++) {
            if (arr3[i] < 6) {arr3[i] *= 2;}
        if (i == 8) {
            break;}
            }
    }
    //4
    public static void setIntSquareArrayDiag() {
        private static int arr4[][] = new int[5][5];
        for (int i = 0; i < arr4.length; i++) {
            for (int j = 0; j < arr4[i].length; j++) {
                if (j == i) {
                    arr4[i][j] = 1;
                }
            }
        }
    }
    //5
    public static void searchAggregateArr(float arrMin, float arrMax) {
    private static float arr5[] = new float[10];
    arrMin = arr5[0];
    arrMax = arr5[0];
    for (int i = 1; i <= arr5.length - 1; i ++) {
        if (arr5[i] >= arrMax) {
            arrMax = arr5[i];
        }
        if (arr5[i] < arrMin) {
            arrMin = arr5[i];
        }
    }
    }

/**
 * Урок 3. Практика
 */
//1
private static void gameOne() {
    Scanner scanner = new Scanner(System.in);
    do {
        int numComp = random.nextInt(10);
        System.out.println("Угдай число от 0 до 9 с трех попыток");
        for (int i = 3; i > 0; i--) {
            System.out.println("Введите ответ: ");
            int questionNum = scanner.nextInt();
                System.out.println("Вы угадали число, молодец!");
                break;
            }
            System.out.println(questionNum > numComp ? "Введенное чилсо больше " : "Введенное число меньше ");
            System.out.println((i-1) > 0 ? " у вас осталось " + (i-1) + " попыток." : "Попытки закончились, вы проиграли.");
        }
        System.out.println("Повторить игру еще раз? 1 – да / 0 – нет»(1 – повторить, 0 – нет)");
    }
    while (scanner.nextInt() == 1);
    }
    //2
private static void gameTwo() {

    String[] words = {"apple", "orange", "lemon", "banana", "apricot", "avocado", "broccoli", "carrot", "cherry",
        "garlic", "grape", "melon", "leak", "kiwi", "mango", "mushroom", "nut", "olive", "pea", "peanut",
        "pear", "pepper", "pineapple", "pumpkin", "potato"};
    int indWord = random.nextInt(words.length - 1);
    String word = words[indWord];
    int lenWord = word.length();
    System.out.println("Попробуте отгадать загаданное слово");
    System.out.println(word);
    Scanner scanner = new Scanner(System.in);
    do {
        System.out.println("Введи свой ответ: )");
        String answer = scanner.nextLine();
        if (answer.equals(""))
            break;
        else if (word.equals(answer)) {
            System.out.println("Вы угадали слово, игра закончена");
            break;
        }
        char[] charsAnswer = answer.toCharArray();
        for (int i = 0; i < lenWord; i++) {
            if (i >= charsAnswer.length)
                break;
            if (word.charAt(i) != charsAnswer[i]) charsAnswer[i] = '#';
        }
        StringBuilder comment = new StringBuilder(String.valueOf(charsAnswer));
        for (int i = comment.length(); i < 15; i++) comment.append("#");
        System.out.println(comment);
    }
    while (true);
}
}