import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import "./addform.css"
import { useAppDispatch } from '../../hooks/hooks';
import { blogActions } from '../../redux/slices';

interface FormValues {
  title: string;
  photo: string;
  paragraph: string;
}

function AddBlocksForm() {
  const dispatch = useAppDispatch();
 

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
   const data2 = {
      id: 3,
      title: "Еклектика: Поєднання Різних Стилів",
      description: {
        blocks: [
          {
            photo: [
              "images/style3_block1.jpg"
            ],
            paragraph: "Еклектика у дизайні інтер’єру дозволяє об’єднати різні стилі та напрямки, створюючи унікальний та неповторний інтер’єр. У 2023 році цей стиль набуває особливої популярності, адже він дозволяє виразити свій індивідуальний смак."
          },
          {
            photo: [
              "images/style3_block2.jpg"
            ],
            paragraph: "Ми розкажемо, як обирати елементи для еклектичного інтер’єру, як вони поєднуються та створюють гармонійний образ приміщення."
          }
        ]
      }
    }
    console.log(data);
    dispatch(blogActions.setBlock(data2));
    reset()
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
    
        <div>
          <br></br>
          <label htmlFor="blockTitle">Назва блоку</label>
          <input
            type="text"
            id="blockTitle"
            {...register('title')}
            placeholder="Введіть назву блоку"
          />
        </div>
        <div>
          <label htmlFor="blockPhoto">Фото блоку</label>
          <input
            type="text"
            id="blockPhoto"
            {...register('photo')}
            placeholder="Введіть URL фото блоку"
          />
        </div>
        <div>
          <label htmlFor="paragraph">Параграф блоку</label>
          <textarea
            id="blockParagraph"
            {...register('paragraph')}
            placeholder="Введіть текст параграфу блоку"
          />
        </div>
        <button type="submit">Додати блок</button>
      </form>
    </div>

  );
}

export { AddBlocksForm };