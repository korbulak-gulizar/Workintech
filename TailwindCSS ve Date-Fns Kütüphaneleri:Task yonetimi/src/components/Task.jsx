import React from 'react';
import { formatDistanceToNow, differenceInDays } from 'date-fns';
import { tr } from 'date-fns/locale';

const Task = ({ taskObj, onComplete }) => {
  const deadlineDate = new Date(taskObj.deadline);
  const daysLeft = differenceInDays(deadlineDate, new Date());

  const deadlineText = formatDistanceToNow(deadlineDate, {
    addSuffix: true,
    locale: tr,
  });

  const deadlineBg = daysLeft < 3 ? 'bg-urgent' : 'bg-normal';

  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0_rgb(0 0 0 / 10%)]">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>

      <div className="text-xs pt-1">
        son teslim:{' '}
        <span className={`inline-block py-1 px-2 rounded-sm ${deadlineBg}`}>
          {deadlineText}
        </span>
      </div>

      <p className="pt-2 pb-3 text-sm text-[#444]">{taskObj.description}</p>

      <div>
        {taskObj.people.map((p) => (
          <span
            key={p}
            className="inline-block py-1.5 px-3 text-sm border-solid border-2 border-[#ccc] mr-1 mb-1.5 rounded-[30px]"
          >
            {p}
          </span>
        ))}
      </div>

      {onComplete && (
        <button
          onClick={() => onComplete(taskObj.id)}
          className="block py-2 px-3 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0 0 0 / 5%)] rounded-sm border-0 cursor-pointer"
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
