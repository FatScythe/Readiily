// Hook
import useSWR from "swr";
// Utils
import url from "../../utils/url";

const Comment = ({ id }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    url + "/api/v1/comment/request/" + id,
    fetcher
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if ((data && data.msg) || error) {
    return <div>Failed to load</div>;
  }

  return (
    <div className='w-5/6 z-10 mx-auto'>
      {data.length > 0 ? (
        data.map((comment) => (
          <div
            key={comment._id}
            className='border border-black p-2 text-lg mt-2 rounded-md'
          >
            <h2 className='text-sm text-blue'>
              {new Date(comment.createdAt).toDateString()}
            </h2>
            <h3>{comment.comment}</h3>
          </div>
        ))
      ) : (
        <h2>No comments</h2>
      )}
    </div>
  );
};

export default Comment;
