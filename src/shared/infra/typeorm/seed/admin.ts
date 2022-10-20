/* eslint-disable @typescript-eslint/no-use-before-define */
import { getConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { hash } from "bcrypt";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license )
    values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'xxxxxxx')
    `,
  );

  await connection.close();
}

create().then(() => console.log("adm user created"));
