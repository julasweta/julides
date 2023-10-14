import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import "./addform.css"
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../redux/store';
import { blogActions } from '../../redux/slices';
import { ICardInteriorReq } from '../../interfaces/blogInterface';

interface FormValues {
  title: string;
  short: string;
}

function AddPostForm() {
  const dispatch = useAppDispatch();
  const { posts, blocks } = useAppSelector(
    (state: RootState) => state.blog,
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>();

  console.log(errors);

  //отримуємо блоки з AddFormBlocks(blocks) і відправляємо в базу
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const res: ICardInteriorReq = {
      title: data.title,
      short: data.short,
      description: {
        blocks: blocks
      }
    };
    dispatch(blogActions.addPost({data:res}));
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Назва статті</label>
          <input
            type="text"
            id="title"
            {...register('title')}
            placeholder="Введіть назву статті"
          />
        </div>
        <div>
          <label htmlFor="short">Короткий опис</label>
          <textarea
            id="short"
            {...register('short')}
            placeholder="Введіть короткий опис"
          />
        </div>

        <button type="submit">Зберегти статтю</button>
      </form>
    </div>

  );
}

export { AddPostForm };



