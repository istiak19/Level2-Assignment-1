# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

In TypeScript, enums (enumerations) are a powerful feature that make your code more organized, readable, and type-safe.
While some beginners might overlook enums, once you understand their purpose, you'll find them essential for writing clean and reliable code.

Today, we'll cover:

* Why enums are useful
* How to use numeric and string enums
* Real examples

---

## Numeric Enum Example

In a numeric enum, each item gets an automatic number (starting from `0` by default).

### Example

```typescript
enum Direction {
  North,
  East,
  South,
  West
}

const move = Direction.North;
console.log(move); // Output: 0
```

Here:

* North = 0
* East = 1
* South = 2
* West = 3

You can manually set the starting value:

```typescript
enum Direction {
  North = 1,
  East,
  South,
  West
}

console.log(Direction.East); // Output: 2
```

---

## String Enum Example

In a string enum, each item is assigned a clear, readable string value.

### Example

```typescript
enum UserRole {
  Admin = "ADMIN",
  Student = "STUDENT",
}

const role = UserRole.Admin;
console.log(role); // Output: "ADMIN"
```

---

## Real Example: User Roles

### Without Enums

```typescript
function checkAccess(role: string) {
  if (role === "ADMIN") {
    // Do something
  }
}
```

* Typing mistakes can cause bugs.

---

### With Enums

```typescript
enum UserRole {
  Admin = "ADMIN",
  Student = "STUDENT",
}

function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    // Do something
  }
}
```

* Type-safe and better developer experience with auto-completion.


# Provide an example of using union and intersection types in TypeScript.

TypeScript offers powerful tools for type composition: union types (|) and intersection types (&). These are useful for modeling flexible and expressive data structures.

## Union Types (`|`)

**Union type** means a value can be **one of several types**.

### Example:

```typescript
function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId(101);        // OK: number
printId("abc123");   // OK: string
```

* `id` can be either a number **or** a string.

---

## Intersection Types (`&`)

**Intersection type** means a value must **have all the properties** of multiple types combined.

### Example:

```typescript
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
  name: "anik",
  employeeId: 1234
};
```

* `emp` **must have** both `name` and `employeeId`.
Useful when you want **to merge multiple types** together.


## Real-World Example: Form Input Handling


### Example: Union

```typescript
interface Guest {
  role: "guest";
  name: string;
}

interface RegisteredUser {
  role: "user";
  name: string;
  email: string;
  userId: number;
}

type FormUser = Guest | RegisteredUser;

function handleForm(user: FormUser) {
  console.log(`Welcome, ${user.name}!`);

  if (user.role === "user") {
    console.log(`Your email: ${user.email}`);
  }
}

const guest: FormUser = { role: "guest", name: "Istiak" };
const registered: FormUser = { role: "user", name: "Istiak Anik", email: "anik@gmail.com", userId: 101 };

handleForm(guest);
handleForm(registered);

### Example: Intersection

```typescript
interface Guest {
  role: "guest";
  name: string;
}

interface RegisteredUser {
  role: "user";
  name: string;
  email: string;
  userId: number;
}

interface PremiumUser {
  premiumStatus: boolean;
}

// Combining guest and registered user into a new type using intersection type
type User = Guest & RegisteredUser & PremiumUser;

function handleUser(user: User) {
  console.log(`Welcome, ${user.name}!`);
  console.log(`Your email: ${user.email}`);
  console.log(`User ID: ${user.userId}`);
  console.log(`Premium Status: ${user.premiumStatus ? 'Active' : 'Inactive'}`);
}

// Creating a super user who has both guest and registered user properties
const user: User = {
  role: "user",
  name: "Istiak Anik",
  email: "anik@gmail.com",
  userId: 101,
  premiumStatus: true,
};

handleUser(User);
