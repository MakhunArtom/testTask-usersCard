# We Follower

This is a test application whose purpose is to test my own skills.
It simulates subscribing and unsubscribing the user from other users.

It is designed based on a test assignment -- [Test task](https://drive.google.com/file/d/1XQnUiuhy6zndS8wN9ZonHZV6Iu0esiA1/view)

Mockapi was used to simulate the backend -- [mockapi.io](https://github.com/mockapi-io/docs/wiki).

## Demo

Here is a working live demo -- (https://makhunartom.github.io/testTask-usersCard/)

## Technology

- CSS
- React

## npm Modules

- styled-components@^5.0.0

## Conclusion

In solving this task, I practiced my skills:

- React Routes;
- Division of Responsibility;
- JSX;
- Internal state of the component;
- CSS in JavaScript use styled-components;

## Difficulties

**In strict mode, the reactor did not work correctly during the call useEfect**

**Unfortunately, I don't have pictures of the problem.**

const [users, setUsers] = useState([]);
const [page, setPage] = useState(1);

useEffect(() => {
getUsers(page)
.then((resp) => setUsers((prev) => [...prev, ...resp]))
.catch((err) => setError(err.message))
.finally(() => setIsLoading(false));
}, [page]);

**It was called several times, so the same components were duplicated in the state**

- example state **[element1,element2,element3,element4,element5,element6,element1,element2,element3,element4,element5,element6]**

**I solved this problem by turning off high-security.**
