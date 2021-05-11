
Equivalent to: SELECT * FROM recipes

```
Map(
  Paginate(Match(Index("all_recipes"))),
  Lambda("ref", Get(Var("ref")))
)
```
Equivalent to: SELECT ref as id, name, summary FROM recipes

``` 
Map(
  Paginate(Match(Index("all_recipes"))),
  Lambda("ref", Let(
      {
        doc: Get(Var("ref"))
      },
      {
        id: Select(["ref", "id"], Var("doc")),
        name: Select(["data", "title"], Var("doc")),
        position: Select(["data", "summary"], Var("doc"))
      }
    ))
)
```