package com.github.aceisnotmycard.contollers;

import com.github.aceisnotmycard.repositories.StaffSpecializationRepositopy;
import com.github.aceisnotmycard.repositories.entities.StaffSpecialization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/staff-specializations")
public class StaffSpecializationController extends BaseController<StaffSpecialization, StaffSpecializationRepositopy> {

    @Autowired
    public StaffSpecializationController(StaffSpecializationRepositopy repo) {
        super(repo);
    }
}
