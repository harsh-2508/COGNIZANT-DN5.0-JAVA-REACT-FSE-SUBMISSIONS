# Spring Data JPA & Hibernate
**Target dates:** 26 Jun–02 Jul 2026

## 📝 Exercises Solved
- [x] 1. spring-data-jpa-handson--> Spring Data JPA - Quick Example
- [x] 1. spring-data-jpa-handson--> Difference between JPA, Hibernate and Spring Data JPA



## 📸 Screenshots / Output (if applicable)

# 1. Spring Data JPA - Quick Example
<img src="./orm-learn_HandsOn_1/handsOn_1_JPA.png">

# 2. Difference between JPA, Hibernate and Spring Data JPA

---
# JPA (Java Persistence API)
  - jpa is a standard java specification that simplifies relational database management through object relational mapping(ORM).
  - defines standard to map java objects with database tables
  - does not provide implementation
  - uses annotation such as: @Entity, @Table ,@Column ,@Id

  ```java
  ** Example :**
  @Entity
  @Table(name="country")
  public class Country{
    @Id
    @Column
    private String code;

    @Column
    private String name;
  }
```
---

# Hibernate
 - hibernate is an orm framework
 - implementation of jpa
 - it converts java objects into sql queries and maps database records back into java objects
 - manages : database connections,caching,sessions and transactions

 ### Example:
 ```java
  Session session=factory.openSession();
  Transaction tx=session.beginTransaction();
  session.save(employee);

  tx.commit();
  session.close();
  ```

  # Spring jpa data
    - it's a spring module built on top of jpa.
    - uses hibernate internally
    -  reduces boilerplate code by providing 'JpaRepository' interface
    -  automatically manages: CRUD operations, transactions, and repository implementations.
  ### example:
  **repository**
  ```java
  @Repository
  public interface EmployeeRepository extends JpaRepository<Employee,Integer>{

  }
   ```
  **Services**

  ```java
  @Services
  public class EmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional 
    public void addEmployee(Employee employee){
      employeeRepository.save(employee);
    }
  }

   ```
  ---

  # Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|----------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Provides Implementation | ❌ No | ✅ Yes | Uses Hibernate |
| Generates SQL | ❌ No | ✅ Yes | Through Hibernate |
| Transaction Management | Defines rules | Manual | Automatic |
| Boilerplate Code | High | Medium | Very Low |
| CRUD Support | No | Manual | Automatic (`JpaRepository`) |

---

# Relationship

```text
                Java Application
                       │
                       ▼
              Spring Data JPA
                       │
                       ▼
                 Hibernate
                       │
                       ▼
             JPA Specification
                       │
                       ▼
                 MySQL Database
```

---

# Key differences:
  ### jpa
  - defines the rules (specification)
  - does not contain implementation

  ### hibernate
  - implements jpa
  - perform orm
  - generates sql queries automatically
  ### spring data jpa
  - built on top of jpa 
  - uses hibernate automatically
  - simplifies database operations using JpaRepository
  - reduces boilerplate code and automatically manages transaction

  --- 

  

