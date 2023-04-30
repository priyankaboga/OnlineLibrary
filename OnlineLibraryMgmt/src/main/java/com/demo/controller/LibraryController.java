package com.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Library;
import com.demo.repository.LibraryInterface;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class LibraryController
{

	 @Autowired
	 private LibraryInterface Linterface;
	 
	 @GetMapping("/view")
	 @CrossOrigin(origins="http://localhost:4200")
	 public List<Library>getBooks()
	 {
		return this.Linterface.findAll(); 
		 
	 }
	
	 @PostMapping("insert")
	 @CrossOrigin(origins="http://localhost:4200")
	 public Library insert(@RequestBody Library lm)
	 {
		 return this.Linterface.save(lm);
	 }
	 
	 @PostMapping("update")
	 @CrossOrigin(origins="http://localhost:4200")
	 public Library update(@RequestBody Library lm1)
	 {
		 return this.Linterface.save(lm1);
	 }
	 
	 @PostMapping("delete")
	 @CrossOrigin(origins="http://localhost:4200")
	 public void deletebook(@RequestBody Library id)
	 {
		 this.Linterface.delete(id);
	 }
}