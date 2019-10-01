package com.aidandlim.camagru.api;

import com.aidandlim.camagru.dto.Token;
import com.aidandlim.camagru.dto.User;
import com.aidandlim.camagru.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class AuthAPI {

    @Autowired
    AuthService service;

    @RequestMapping("/api/user/isLogin")
    public boolean isLogin(@RequestBody Token token) { return (service.isLogin(token)); }

    @RequestMapping("/api/user/signin")
    public Token signin(@RequestBody User user) {
        return (service.signin(user));
    }

    @RequestMapping("/api/user/signup")
    public boolean signup(@RequestBody User user) {
        return (service.signup(user));
    }

    @RequestMapping("/api/user/verifyAgain")
    public boolean verifyAgain(@RequestBody User user) {
        return (service.verifyAgain(user));
    }

    @RequestMapping("/api/user/forgot")
    public boolean forgot(@RequestBody User user) {
        return (service.forgot(user));
    }

    @RequestMapping("/api/user/select")
    public User select(@RequestBody Token token) { return (service.select(token)); }

    @RequestMapping("/api/user/update")
    public boolean update(@RequestBody User user) { return (service.update(user)); }

    @RequestMapping("/api/user/updatePicture")
    public boolean updatePicture(@RequestParam("token") String token, @RequestParam("pic") MultipartFile file) { return (service.updatePicture(token, file)); }

    @RequestMapping("/api/user/updatePassword")
    public boolean updatePassword(@RequestBody User user) { return (service.updatePassword(user)); }

    @RequestMapping("/api/user/updatePrivate")
    public boolean updatePrivate(@RequestBody User user) { return (service.updatePrivate(user)); }

    @RequestMapping("/api/user/updateNotificate")
    public boolean updateNotificate(@RequestBody User user) { return (service.updateNotificate(user)); }

    @RequestMapping("/api/user/delete")
    public boolean delete(@RequestBody User user) { return (service.delete(user)); }

}
