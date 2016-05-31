package com.github.aceisnotmycard.contollers;

import com.github.aceisnotmycard.repositories.FacilityRepository;
import com.github.aceisnotmycard.repositories.entities.Facility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/facilities")
public class FacilityController extends BaseController<Facility, FacilityRepository> {
    @Autowired
    public FacilityController(FacilityRepository repo) {
        super(repo);
    }

//    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
//    public void delete(@PathVariable Integer id) {
//        repo.delete(id);
//    }
}
