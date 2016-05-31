package com.github.aceisnotmycard.contollers;


import com.github.aceisnotmycard.repositories.StaffRepository;
import com.github.aceisnotmycard.repositories.entities.Staff;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/staff")
public class StaffController extends BaseController<Staff, StaffRepository> {

    @Autowired
    public StaffController(StaffRepository repo) {
        super(repo);
    }
}
