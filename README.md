### Реализуйте дополнительную логику для класса TodoList

По ссылке можете найти данный класс https://gist.github.com/oleh-rovenskyi-nortal/516a5f1b0130b6b9eaf5fbef249b3cfd

1. Реализуйте метод changeStatus. Который будет менять статус задачи. Также при смене статуса нужно менять подсветку у задачи:
   - зеленый цвет - выполненная задача
   - желтый цвет - в процессе
   

2. Реализуйте удаление задачи из списка.


3. Реализуйте возможность добавления задачи в список. Возле input должна быть кнопка create


4. Реализуйте возможность поиска findTasks.
   - Нужно найти все задачи которые содержат фразу которую передаете в метод поиска. Подсказка можно использовать includes https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes
   - Добавьте возле input кнопку find. При нажатии на кнопку find нужно отобразить вместо основного списка задач - найденные задачи. Если после этого пользователь создаст новую задачу то необходимо список с найденными задачами заменить на список существующих задач.


5. Добавьте возле input кнопку find. При нажатии на кнопку find нужно отобразить вместо основного списка задач - найденные задачи. Если после этого пользователь создаст новую задачу то необходимо список с найденными задачами заменить на список существующих задач.

#### Опциональное задание (не обязательное).
Реализуйте метод который меняет позицию таски в списке moveUp и moveDown. Данные методы принимают задачу или id задачи для которой нужно поменять позицию.

