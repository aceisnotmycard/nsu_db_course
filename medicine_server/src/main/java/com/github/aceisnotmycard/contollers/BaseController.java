package com.github.aceisnotmycard.contollers;


import com.github.aceisnotmycard.repositories.entities.BaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

class BaseController<Entity extends BaseEntity, R extends JpaRepository<Entity, Integer>> {

    protected R repo;

    public BaseController(R repo) {
        this.repo = repo;
    }

    @RequestMapping(method = RequestMethod.GET)
    private List<Entity> findAll() { return repo.findAll(); }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Entity find(@PathVariable Integer id) {
        return repo.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Entity create(@RequestBody Entity doc) {
        return repo.save(doc);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
    public Entity update(@PathVariable Integer id, @RequestBody Entity updated) {
        Entity cur = repo.findOne(id);
        cur.copy(updated);
        return repo.save(cur);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public Entity delete(@PathVariable Integer id) {
        repo.delete(id);
        return null;
    }
}
