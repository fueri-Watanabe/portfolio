const Confirm = () => {
  // TODO 左に顧客情報、右側に内容
  return (
    <>
      <div
        className="fixed flex flex-col w-auto my-10 mx-auto max-w-screen-xl rounded-lg shadow-2xl
    inset-0 z-50 outline-none focus:outline-none bg-white dark:bg-slate-800"
      >
        <div className="flex justify-between items-center dark:border-slate-600 px-5 pt-5">
          <div className="text-lg font-semibold">{/* {title && title} */}</div>
          {/* <ModalCloseButton setShowModal={setShowModal} /> */}
          {/* <button onClick={() => setShowModal(false)}>
        <XMarkIcon className="h-6 w-6 text-gray-500" />
      </button> */}
        </div>
        <div className="dark:border-slate-600 px-5 py-3">
          <p>{/* {description && description} */}</p>
        </div>
        {/* bodyとfooterのLayoutを入れる */}
        {/* {children} */}
      </div>
      <div className="opacity-80 fixed inset-0 z-40 bg-slate-50 dark:bg-slate-950"></div>
    </>
  );
};
export default Confirm;
